;;; ==========================================================================
;;; Program: COORD_EXPORT.LSP (Survey Coordinate Export to CSV)
;;; Author: BR Bhatta | www.brbhatta.com
;;; Command: EXPCOORD
;;; Description: Click survey/cadastral boundary points to label them with point numbers
;;;              and export (Point, Easting, Northing, Elevation) directly to a CSV file.
;;; ==========================================================================

(defun c:EXPCOORD ( / pt pt_num filepath file pt_str)
  (setq filepath (getfiled "Save Coordinates CSV" "survey_points.csv" "csv" 1))
  (if filepath
    (progn
      (setq file (open filepath "w"))
      (write-line "Point_No,Easting_X,Northing_Y,Elevation_Z" file)
      (setq pt_num 1)
      
      (while (setq pt (getpoint (strcat "\nPick Survey Corner Point #" (itoa pt_num) " (or Enter to finish): ")))
        (setq pt_str (strcat (itoa pt_num) ","
                             (rtos (car pt) 2 4) ","
                             (rtos (cadr pt) 2 4) ","
                             (rtos (caddr pt) 2 4)))
        (write-line pt_str file)
        
        ;; Label point on drawing
        (command "_.POINT" pt)
        (command "_.TEXT" pt "1.5" "0" (strcat "P" (itoa pt_num)))
        
        (princ (strcat "\nRecorded P" (itoa pt_num) ": " pt_str))
        (setq pt_num (1+ pt_num))
      )
      
      (close file)
      (princ (strcat "\n[Success] Coordinates exported to: " filepath))
    )
  )
  (princ)
)

(princ "\n[BRBhatta.com] COORD_EXPORT loaded! Type 'EXPCOORD' to start export.")
(princ)
