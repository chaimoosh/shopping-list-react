class AddNotesToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :notes, :string
  end
end
