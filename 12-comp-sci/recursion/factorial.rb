def factorial_iterative(n)
  result = 1
  while n > 1
    result *= n # mutation: changing result
    n -= 1      # mutation: changing n
  end

  result
end

def factorial_recursive(n)
  if n <= 1
    puts "base case reached"
    1 # base case
  else
    puts "recursing for: n #{ n }"
    n * factorial_recursive(n-1) # recursion: moving towards the end condition
  end
end

require 'pry'
binding.pry
