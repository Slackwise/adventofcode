(load "init.scm")

(define input-lines (get-input-lines (current-filename)))

(define extract-numbers
  (lambda (line)
    (let ((digits (map match:substring (list-matches "[0-9]" line))))
      (string->number (string-append (car digits) (last digits))))))

(define calibration-sum (fold + 0 (map extract-numbers input-lines)))

(display calibration-sum)

(define number-words '( ("one"    . 1)
                        ("two"    . 2)
                        ("three"  . 3)
                        ("four"   . 4)
                        ("five"   . 5)
                        ("six"    . 6)
                        ("seven"  . 7)
                        ("eight"  . 8)
                        ("nine"   . 9) ))


(define replace-number-words
  (lambda (line)
    (fold (lambda (number-word line-to-transform)
            (string-replace-substring line-to-transform (car number-word) (cdr number-word)))
          line
          number-words)))
