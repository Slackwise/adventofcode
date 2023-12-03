(load "init.scm")

(define input-lines (get-input-lines (current-filename)))

(define extract-numbers
  (lambda (line)
    (let ((digits (map match:substring (list-matches "[0-9]" line))))
      (string->number (string-append (car digits) (last digits))))))

(define calibration-sum (fold + 0 (map extract-numbers input-lines)))

(display calibration-sum)
