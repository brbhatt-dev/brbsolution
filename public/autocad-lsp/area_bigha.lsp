;;; ==========================================================================
;;; Program: AREA_BIGHA.LSP (AutoCAD AutoLISP Script for Nepal Land Survey)
;;; Author: BR Bhatta | www.brbhatta.com
;;; Command: ABIG or AREABIGHA
;;; Description: Select closed Parcel boundary to get Area in Bigha-Katha-Dhur.
;;; ==========================================================================

(defun c:ABIG ( / ent obj area_sqft area_sqm bigha katha dhur rem_sqft txt_pos)
  (vl-load-com)
  (setq ent (car (entsel "\nSelect closed Parcel Polyline / Boundary: ")))
  (if ent
    (progn
      (setq obj (vlax-ename->vla-object ent))
      (if (vlax-property-available-p obj 'Area)
        (progn
          (setq area_sqft (vlax-get-property obj 'Area))
          (setq area_sqm (/ area_sqft 10.7639))
          
          ;; Bigha Calculation (1 Bigha = 72900 Sq Ft)
          (setq bigha (fix (/ area_sqft 72900.0)))
          (setq rem_sqft (rem area_sqft 72900.0))
          
          ;; Katha Calculation (1 Katha = 3645 Sq Ft)
          (setq katha (fix (/ rem_sqft 3645.0)))
          (setq rem_sqft (rem rem_sqft 3645.0))
          
          ;; Dhur Calculation (1 Dhur = 182.25 Sq Ft)
          (setq dhur (/ rem_sqft 182.25))

          (princ (strcat "\n--- LAND AREA (TERAI REGION) ---"
                         "\nArea: " (rtos area_sqft 2 2) " Sq.Ft. | " (rtos area_sqm 2 2) " Sq.M."
                         "\nBigha-Katha-Dhur: "
                         (itoa bigha) "-" (itoa katha) "-" (rtos dhur 2 2)))

          (setq txt_pos (getpoint "\nClick insertion point to place text in drawing (or Enter to skip): "))
          (if txt_pos
            (command "_.TEXT" txt_pos "" "0"
                     (strcat "Area: " (itoa bigha) "-" (itoa katha) "-" (rtos dhur 2 1) " (" (rtos area_sqft 2 1) " Sq.Ft.)"))
          )
        )
        (princ "\nSelected object has no area property.")
      )
    )
    (princ "\nNo object selected.")
  )
  (princ)
)

(defun c:AREABIGHA () (c:ABIG))
(princ "\n[BRBhatta.com] AREA_BIGHA loaded! Type 'ABIG' to calculate area.")
(princ)
