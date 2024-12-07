(ns day1
 (:require [clojure.string :as string]
           [promesa.core :as p]
           [nbb.core :as nbb]))

(p/->>  (nbb/slurp "input/day1.txt")
        ;; (println)
        (#(string/split % \newline))
        (map #(string/split % #"   "))
        (prn))