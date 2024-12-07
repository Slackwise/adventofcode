(ns day1
 (:require [clojure.string :as string]
           [promesa.core :as p]
           [nbb.core :as nbb]))

(def num js/parseInt)

(def abs js/Math.abs)

(defn build-num-vecs [[lefts rights] [left right]]
  [(conj lefts (num left)) (conj rights (num right))])

(p/->>  (nbb/slurp "input/day1.txt") 
        (#(string/split % \newline))
        (map #(string/split % #"   "))
        (reduce build-num-vecs [[] []])
        (map sort)
        ((fn [[left right]] (map vector left right)))
        (map #(apply (comp abs -) %))
        (reduce +)
        (prn))