(load "init.scm")

(define input-lines (get-input-lines (current-filename)))

(define extract-numbers
  (lambda (line)
    (string->number (string-join (map match:substring (list-matches "[:digit:]+" line))))))

(display (extract-numbers input-lines))

(define calibration-sum (fold + 0 (map extract-numbers input-lines)))

(display calibration-sum)
