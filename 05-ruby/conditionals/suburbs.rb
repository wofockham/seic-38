# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in: "
residence = gets.chomp.capitalize

puts case residence
when 'Glebe'
  "Nice foreshore walk"
when 'Fairlight'
  "What a fancy name"
when 'Gosford'
  "That's not really Sydney is it?"
when 'Putney'
  "That's an odd name"
else
  "I'm sure that's a lovely place"
end
