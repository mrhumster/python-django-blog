from .base import FunctionalTest
from selenium.webdriver.common.by import By


class TestIndex(FunctionalTest):
	def test_index(self):
		self.browser.get(self.live_server_url)
		self.assertIn('Awesome Blog', self.browser.find_element(By.TAG_NAME, 'h1').text)
