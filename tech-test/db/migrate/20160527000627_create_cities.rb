class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.float :lat
      t.float :long
      t.integer :currDay
      t.float :currTemp
      t.string :currDesc
      t.integer :day2
      t.integer :day3
      t.integer :day4
      t.integer :day5
      t.float :temp2
      t.float :temp3
      t.float :temp4
      t.float :temp5
      t.string :desc2
      t.string :desc3
      t.string :desc4
      t.string :desc5

      t.timestamps null: false
    end
  end
end
