class CustomersController < ApplicationController

    before_action :customer_set, only: [:show, :destroy, :edit, :update]

    def index
     @customer = Customer.all
    end

    def new 
      @customer = Customer.new  
    end

    def create
    
     @customer = Customer.new(customer_params)
        respond_to do |format|
            if @customer.save
            format.html {redirect_to customers_path, notice: "Cliente cadastrado com sucesso!"}
            else
            format.html {render :new}
            flash.alert = @customer.errors.full_messages.to_sentence
            end
           
        end  
    end

    def show
    
    end

    def edit
    end

    def update
    
        respond_to do |format|
            if @customer.update(customer_params)
            format.html {redirect_to customers_path, notice: "Cliente atualizado com sucesso!"}
            else
            format.html {render :new}
            flash.alert = @customer.errors.full_messages.to_sentence
            end
           
        end  
    end

    private

    def customer_set
        @customer = Customer.find(params[:id])
    end

    def customer_params
        params.require(:customer).permit(:name, :email, :phone, :smoker, :avatar)
    end


end
