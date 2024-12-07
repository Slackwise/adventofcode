(ns day1 
 (:require 
  [clojure.string :as string]
  [nbb.core :as nbb]))

(def input (nbb/slurp "input/day1.txt"))

(println input)

(def output
  (-> input
      (map #(string/split % #" "))))

(println output)