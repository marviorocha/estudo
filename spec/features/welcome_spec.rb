require 'rails_helper'

feature "Welcome", type: :feature do
   
  scenario 'Mostra a mensagem de bem-vindo' do
    visit ('/')
    expect(page).to have_content('Bem-vindo')
  end

  scenario 'Visitar o link de cadastro' do
    visit (root_path)
    expect(find('ul li')).to have_link("Cadastro de Clientes")
  end

end
