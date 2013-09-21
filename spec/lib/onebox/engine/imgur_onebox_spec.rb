require "spec_helper"

describe Onebox::Engine::ImgurOnebox do
  let(:link) { "http://imgur.com" }
  before do
    fake(link, response("imgur_photo"))
  end

  it_behaves_like "engines"

  describe "#to_html" do
    let(:html) { described_class.new(link).to_html }

    it "returns the image title" do
      expect(html).to include("My dog likes to hug me")
    end

    it "returns the image" do
      expect(html).to include("twoDTCU.jpg")
    end

    it "returns URL" do
      expect(html).to include(link)
    end
  end
end
