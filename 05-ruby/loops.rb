# Infinite loop
# while true
#   puts "Hello"
# end

# i = 0 # initialise
# while i < 5 # conditional
#   puts "i is now: #{ i }"
#   i += 1 # update
# end

# i = 0
# until i == 5 # conditional
#   puts "i is now: #{ i }"
#   i += 1
# end


# Iterators: Ruby's preference for loops
# 5.times do |iteration|
#   puts "Hello, iteration is now: #{ iteration }"
# end

4.downto(0) do |n|
  puts "n is now: #{ n }"
end

# 5.times { puts "Hello" }
