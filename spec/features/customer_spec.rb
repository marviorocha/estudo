require 'rails_helper'

feature "Customers", type: :feature do

scenario 'Verifica link cadastro de clientes' do
    visit (root_path)
    expect(page).to have_link("Cadastro de Clientes")
end

scenario 'Verifica link de novo cliente' do
    visit(root_path)
    click_on('Cadastro de Clientes')
    expect(page).to have_content('Lista de Clientes')
    expect(page).to have_link('Novo Cliente')
  end

scenario 'Verifica a página de cadastro de cliente' do 
  visit(new_customer_path)
  expect(page).to have_content('Novo Cliente')
  expect(page).to have_button('Cadastrar Cliente')
end

scenario "Cadastrando Cliente válido" do
  visit(new_customer_path)
  customer_name = Faker::Name.name
  fill_in('Nome', with: customer_name)
  fill_in('Email', with: Faker::Internet.email)
  fill_in('Telefone', with: Faker::PhoneNumber.phone_number)
  attach_file("Avatar", "#{Rails.root}/public/avatar.jpg")
  choose(option: ["S", "N"].sample)
  click_on("Cadastrar Cliente")
  expect(page).to have_content("Cliente cadastrado com sucesso!")
  expect(Customer.last.name).to eq(customer_name)
end

scenario "Cadastrando Cliente inválido" do
  visit(new_customer_path)
  click_on('Cadastrar Cliente')
  expect(page).to have_content("can't be blank")
end

scenario "Mostrando Cliente na tela" do 
  customer = create(:customer)
   visit(customer_path(customer.id))
   expect(page).to have_content(customer.name)
end

scenario "Testando indexs" do 
  
  customer1 = create(:customer)
 
  customer2 = create(:customer)

    visit(customers_path)
    expect(page).to have_content(customer1.name).and have_content(customer2.name)

end

scenario "Atualizar Cliente" do 
   customer = create(:customer)
    
    cliente_new = Faker::Name.name 
    visit(edit_customer_path(customer.id))
    fill_in('Nome', with: cliente_new)
    click_on('Cadastrar Cliente')
    expect(page).to have_content('Cliente atualizado com sucesso!')
end

scenario "Mostrando Cliente da Index" do 
  customer = create(:customer)

    visit(customers_path)
    find(:xpath, "/html/body/table/tbody/tr[1]/td[2]/a").click
    expect(page).to have_content("Mostrando Cliente")
end

scenario "Editando Cliente da Index" do 
  customer = create(:customer)

    visit(customers_path)
    find(:xpath, "/html/body/table/tbody/tr[1]/td[3]/a").click
    expect(page).to have_content("Editando cliente")
end

end


