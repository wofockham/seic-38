# An object is kind of like a strict hash -- it stores keys/values.
# BUT you must predefine the keys that are going to be used.
# (you have to predefine the shape)
# ALSO: unlike a hash, objects are designed to store functionality (methods).

# Inheritance
class Actor
  def award_speech
    "I would like to thank my parents and my agent and my life partner. We did, baby!"
  end

  def deny_allegations
    "I deny that and I was drunk and I don't remember and he's not my type."
  end
end

class Stooge < Actor
  def terrible? # predicate
    true
  end
end

# Low ceremony language
class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice # ruby macro: creates getters and setters for the symbols listed.

  def initialize(n='', i='', v='lampooning authority') # variadic
    @name = n
    @instrument = i
    @vice = v
  end
end

groucho = MarxBrother.new
groucho.name= 'Groucho'
groucho.instrument = 'guitar'
groucho.vice = 'cigars'

harpo = MarxBrother.new 'Harpo', 'harp', 'mutism' # set the values during initialization

chico = MarxBrother.new 'Chico', 'piano'

require 'pry'
binding.pry
