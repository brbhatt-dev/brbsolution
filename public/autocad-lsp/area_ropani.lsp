;;; ==========================================================================
;;; Program: AREA_ROPANI.LSP (AutoCAD AutoLISP Script for Nepal Land Survey)
;;; Author: BR Bhatta | www.brbhatta.com
;;; Command: AROP or AREAROPANI
;;; Description: Select any closed polyline or parcel boundary to get the area
;;;              in Sq. Feet, Sq. Metres, and Ropani-Aana-Paisa-Daam.
;;; ==========================================================================

(defun c:AROP ( / ent obj area_sqft area_sqm ropani aana paisa daam rem_sqft txt_pos)
  (vl-load-com)
  (setq ent (car (entsel "\nSelect closed Parcel Polyline / Boundary: ")))
  (if ent
    (progn
      (setq obj (vlax-ename->vla-object ent))
      (if (vlax-property-available-p obj 'Area)
        (progn
          ;; Assuming drawing unit is in Feet (or adjust if in Metres)
          (setq area_sqft (vlax-get-property obj 'Area))
          (setq area_sqm (/ area_sqft 10.7639))
          
          ;; Ropani Calculation (1 Ropani = 5476 Sq Ft)
          (setq ropani (fix (/ area_sqft 5476.0)))
          (setq rem_sqft (rem area_sqft 5476.0))
          
          ;; Aana Calculation (1 Aana = 342.25 Sq Ft)
          (setq aana (fix (/ rem_sqft 342.25)))
          (setq rem_sqft (rem rem_sqft 342.25))
          
          ;; Paisa Calculation (1 Paisa = 85.5625 Sq Ft)
          (setq paisa (fix (/ rem_sqft 85.5625)))
          (setq rem_sqft (rem rem_sqft 85.5625))
          
          ;; Daam Calculation (1 Daam = 21.390625 Sq Ft)
          (setq daam (/ rem_sqft 21.390625))

          (princ (strcat "\n--- LAND AREA (BRBHATTA.COM) ---"
                         "\nArea: " (rtos area_sqft 2 2) " Sq.Ft. | " (rtos area_sqm 2 2) " Sq.M."
                         "\nRopani-Aana-Paisa-Daam: "
                         (itoa ropani) "-" (itoa aana) "-" (itoa paisa) "-" (rtos daam 2 2)))

          ;; Optional: Place Text on drawing
          (setq txt_pos (getpoint "\nClick insertion point to place text in drawing (or Enter to skip): "))
          (if txt_pos
            (command "_.TEXT" txt_pos "" "0"
                     (strcat "Area: " (itoa ropani) "-" (itoa aana) "-" (itoa paisa) "-" (rtos daam 2 1) " (" (rtos area_sqft 2 1) " Sq.Ft.)"))
          )
        )
        (princ "\nSelected object has no area property.")
      )
    )
    (princ "\nNo object selected.")
  )
  (princ)
)

(defun c:AREAROPANI () (c:AROP))
(princ "\n[BRBhatta.com] AREA_ROPANI loaded! Type 'AROP' to calculate area.")
(princ)
