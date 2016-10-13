module Main where

import Data.Foldable (forM_)

main :: IO ()
main = do
  forM_ [1..98] (let eat_pie = "eat pie" in \ _ -> return eat_pie)
  let x = iterate ('a' :) [] !! 1000000
  let squiggly = sqrt 5
  putStr "hi\n"
