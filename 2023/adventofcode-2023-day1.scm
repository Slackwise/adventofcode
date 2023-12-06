(load "init.scm")

(define input-lines (get-input-lines (current-filename)))

;; Part 1:

(define (extract-numbers line)
  (let ((digits (map match:substring (list-matches "[0-9]" line))))
    (string->number (string-append (car digits) (last digits)))))

(define calibration-sum (fold + 0 (map extract-numbers input-lines)))

(display "Part 1: ")
(display calibration-sum)
(display #\newline)


;; Part 2:

(define number-words '( ("one"    . 1)
                        ("two"    . 2)
                        ("three"  . 3)
                        ("four"   . 4)
                        ("five"   . 5)
                        ("six"    . 6)
                        ("seven"  . 7)
                        ("eight"  . 8)
                        ("nine"   . 9) ))


(define (replace-number-words line)
    (fold (lambda (number-word line-to-transform)
            (string-replace-substring line-to-transform (car number-word) (cdr number-word)))
          line
          number-words))

(define (extract-numbers line)
    (let ((digits (map match:substring (list-matches "[0-9]" (replace-number-words line)))))
      (string->number (string-append (car digits) (last digits)))))

(define calibration-sum (fold + 0 (map extract-numbers input-lines)))

(display "Part 2: ")
(display calibration-sum)
(display #\newline)
