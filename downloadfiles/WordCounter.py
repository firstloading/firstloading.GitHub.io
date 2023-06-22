import sublime
import sublime_plugin
import re

def count_chinese_characters(text):
    chinese_characters = re.findall(r'[\u4e00-\u9fff]+', text)
    return sum(len(characters) for characters in chinese_characters)

class ChineseCharacterCounter(sublime_plugin.ViewEventListener):
    def on_modified_async(self):
        self.update_status()

    def on_activated_async(self):
        self.update_status()

    def update_status(self):
        character_count = count_chinese_characters(self.view.substr(sublime.Region(0, self.view.size())))
        self.view.set_status('chinese_character_counter', '汉字数: {}'.format(character_count))

    @classmethod
    def is_applicable(cls, settings):
        return settings.get('syntax') == 'Packages/Text/Plain text.tmLanguage'