User.destroy_all
u1 = User.create :email => 'jonesy@ga.co'
u2 = User.create :email => 'craigsy@ga.co'
puts "#{ User.count } users."

Song.destroy_all
s1 = Song.create :title => 'Have A Safe Trip Dear'
s2 = Song.create :title => 'Toxic'
s3 = Song.create :title => "Don't Ask Me To Dance"
s4 = Song.create :title => 'Gut Feeling'
puts "#{ Song.count } songs."

Album.destroy_all
l1 = Album.create :title => 'Engine Takes To The Water'
l2 = Album.create :title => 'In The Zone'
l3 = Album.create :title => 'The Last Romance'
l4 = Album.create :title => 'Are We Not Men? We Are Devo'
puts "#{ Album.count } albums."

Artist.destroy_all
a1 = Artist.create :name => 'June of 44'
a2 = Artist.create :name => 'Britney Spears'
a3 = Artist.create :name => 'Arab Strap'
a4 = Artist.create :name => 'Devo'
puts "#{ Artist.count } artists."

Genre.destroy_all
g1 = Genre.create :name => 'Nautical Text Rock'
g2 = Genre.create :name => 'Nautical Math Rock'
g3 = Genre.create :name => 'Folk'
g4 = Genre.create :name => 'Scottish Misery Rock'
g5 = Genre.create :name => 'Bollywood Bubblegum Pop'
g6 = Genre.create :name => 'New Wave'
puts "#{ Genre.count } genres."

Mixtape.destroy_all
m1 = Mixtape.create :title => 'Driving Songs'
m2 = Mixtape.create :title => 'Makeout Music'
m3 = Mixtape.create :title => 'Code Jams'
m4 = Mixtape.create :title => 'Monkey Mongs'
puts "#{ Mixtape.count } mixtapes."
