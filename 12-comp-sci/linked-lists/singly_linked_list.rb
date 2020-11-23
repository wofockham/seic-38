class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil) # variadic
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value) # unshift
    node = Node.new value
    node.next = @head
    @head = node # the new node is the new head.
  end

  def append(value)
    last.next = Node.new value
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next # walking
    end
    current_node
  end

  # TODO:
  def remove # AKA shift() - remove the first node
  end

  def insert_after(node, new_value)
  end

  def find(needle)
    # return the node with the value of needle (or nil)
  end

  # Tricky
  def reverse # non-destructive
  end

  # Trickier
  def reverse! # destructive
  end

  # Trickiest
  def each
  end

  # Bonus: .map, .reduce, .select, .reject
  # Bonus: .at_index(3) # equivalent to: bros[3]
end


bros = SinglyLinkedList.new
bros.prepend 'C'
bros.prepend 'B'
bros.prepend 'A'

# bros.each do |b|
#   puts b.upcase
# end

require 'pry'
binding.pry
