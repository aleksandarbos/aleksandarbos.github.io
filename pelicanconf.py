# pelicanconf.py
AUTHOR = 'Aleksandar Bosnjak'
SITENAME = 'Aleksandar Bosnjak'
SITEURL = ''

PATH = 'content'
OUTPUT_PATH = 'output'

# Time and Date
TIMEZONE = 'Europe/Belgrade'
DEFAULT_LANG = 'en'

# Theme Settings
THEME = 'theme'
THEME_STATIC_DIR = 'theme'

# URL Settings
ARTICLE_URL = 'blog/{slug}'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'
PAGE_URL = '{slug}'
PAGE_SAVE_AS = '{slug}/index.html'

# Direct Templates
DIRECT_TEMPLATES = ['index']
INDEX_SAVE_AS = 'index.html'

# Disable Default Pages
ARCHIVES_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
TAGS_SAVE_AS = ''

# Menu Items
MENUITEMS = [
    ('Blog', '/blog'),
    ('Projects', '/projects'),
    ('About', '/about'),
]

# Extra Path Metadata
STATIC_PATHS = ['images', 'extra']
EXTRA_PATH_METADATA = {
    'extra/custom.css': {'path': 'theme/css/custom.css'},
}


SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.8,
        'indexes': 0.5,
        'pages': 0.7
    }
}

# RELATIVE_URLS = False
GOOGLE_ANALYTICS = 'UA-XXXXX-Y'  # If you want analytics
