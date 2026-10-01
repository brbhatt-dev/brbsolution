;;; ==========================================================================
;;; Program: KITTA_NUMBER.LSP (AutoCAD AutoLISP Script for Nepal Cadastral Survey)
;;; Author: BR Bhatta | www.brbhatta.com | infobrbhatta@gmail.com
;;; Command: KN or KITTANUM
;;; Description: Sequentially numbers land parcels / kittas with auto-increment.
;;;              Click inside each parcel to automatically insert parcel number.
;;; ==========================================================================

(defun c:KN ( / start_num text_height pt cur_str)
  (vl-load-com)
  (setq start_num (getint "\nEnter Starting Kitta Number (उदा. 101): "))
  (if (null start_num) (setq start_num 1))
  
  (setq text_height (getdist "\nEnter Text Height (उदा. 1.5 or click 2 points): "))
  (if (null text_height) (setq text_height 1.5))
  
  (princ (strcat "\n--- AUTO KITTA NUMBERING ACTIVATED (Current: " (itoa start_num) ") ---"))
  (princ "\nClick inside parcels sequentially. Press Enter or Esc to Finish.")
  
  (while (setq pt (getpoint (strcat "\nClick point for Kitta No. " (itoa start_num) ": ")))
    (setq cur_str (itoa start_num))
    ;; Create MText / Text centered at picked point
    (command "_.TEXT" "J" "MC" pt text_height "0" cur_str)
    (setq start_num (1+ start_num))
  )
  (princ "\nKitta Numbering Complete! www.brbhatta.com")
  (princ)
)

(defun c:KITTANUM () (c:KN))
(princ "\n[Loaded] KITTA_NUMBER.LSP by BR Bhatta. Type 'KN' to run.")
(princ)
