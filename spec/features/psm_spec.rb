feature 'power saving mode' do
  before do 
    visit('/')
  end

  it 'is on by default' do
    expect(page.find('#power-save-status')).to have_content 'on'
  end
  
end  