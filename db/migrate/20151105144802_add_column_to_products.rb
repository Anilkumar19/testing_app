class AddColumnToProducts < ActiveRecord::Migration
  def change
  	add_column :products, :user_id, :string
  	add_column :products, :category_id, :string
  end
end
