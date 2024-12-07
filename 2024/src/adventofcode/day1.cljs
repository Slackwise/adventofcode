(ns adventofcode.day1 
  (:require 
   [clojure.string :as string]
   [cljs-node-io.core :as io :refer [slurp spit]]))

(def input (slurp "input/day1.txt"))

(print input)

(def output
  (-> input
      (map #(string/split % #" "))))

(print output)