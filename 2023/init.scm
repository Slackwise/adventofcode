(use-modules
  (ice-9 textual-ports))

(define get-input-string
  (lambda (filename)
    (call-with-input-file (find-input-file filename) get-string-all)))

(define find-input-file
  (lambda (filename)
    (string-join `("input/" ,(basename filename ".scm") ".txt") "")))

(define get-input-lines
  (lambda (filename)
    (string-split (get-input-string filename) #\newline)))
