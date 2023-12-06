(use-modules
  (ice-9 textual-ports)
  (ice-9 string-fun)
  (ice-9 regex)
  (srfi srfi-1))

(define (get-input-string filename)
    (call-with-input-file (find-input-file filename) get-string-all))

(define (find-input-file filename)
    (string-join `("input/" ,(basename filename ".scm") ".txt") ""))

(define (get-input-lines filename)
    (string-split (get-input-string filename) #\newline))
