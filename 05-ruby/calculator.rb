def show_menu
  puts "Calculator" # TODO: you can use .center here to make it look nice.
  puts "-=" * 40 # El cheapo horizontal dividing line
  puts "[a] - Addition"
  # TODO: Add other options here
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "Addition coming soon" # TODO: Actually do this
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator!"
