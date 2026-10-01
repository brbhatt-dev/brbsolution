;;; ==========================================================================
;;; Program: BOUNDARY_OFFSET.LSP (Building & Road Setback Tool for Nepal CAD)
;;; Author: BR Bhatta | www.brbhatta.com | infobrbhatta@gmail.com
;;; Command: SETBACK or BSET
;;; Description: Creates standard municipal setbacks (e.g. 5ft, 10ft, 1.5m)
;;;              from parcel boundary line with dedicated layer creation.
;;; ==========================================================================

(defun c:SETBACK ( / ent dist pt)
  (vl-load-com)
  ;; Ensure layer exists
  (if (null (tblsearch "LAYER" "SETBACK_LINE"))
    (command "_.LAYER" "M" "SETBACK_LINE" "C" "1" "" "L" "DASHED" "" "")
  )
  
  (setq dist (getdist "\nEnter Setback Distance in Drawing Units (e.g. 5 for 5ft or 1.5 for 1.5m): "))
  (if (null dist) (setq dist 5.0))
  
  (princ "\nSelect boundary lines to offset. Press Enter to exit.")
  (while (setq ent (entsel "\nSelect Boundary Line/Polyline to Offset: "))
    (setq pt (getpoint "\nClick inside for setback side: "))
    (if pt
      (progn
        (command "_.OFFSET" dist ent pt "")
        (command "_.CHPROP" (entlast) "" "LA" "SETBACK_LINE" "")
      )
    )
  )
  (princ "\nSetback Generation Finished! www.brbhatta.com")
  (princ)
)

(defun c:BSET () (c:SETBACK))
(princ "\n[Loaded] BOUNDARY_OFFSET.LSP by BR Bhatta. Type 'SETBACK' to run.")
(princ)
