
// Add meta tags per page for Twitter and Facebook share cards
export function createMetaTags(tags = {}) {
  const meta = {}

  tags = Object.assign({
    'author': 'Earth Day Live',
    'og:description': tags.description,
    'og:image': tags.image,
    'og:site_name': tags.siteName,
    'og:title': tags.title,
    'og:type': 'website',
    'og:url': tags.url,
    'twitter:card': 'summary_large_image',
    'twitter:description': tags.description,
    'twitter:image': tags.image,
    'twitter:site': '@usclimatestrike',
    'twitter:title': tags.title,
    'twitter:url': tags.url
  }, tags)

  const fakeTagNames = ['title', 'image', 'url']

  for (const key of Object.keys(tags)) {
    if (key.match(/^og\:/)) { // eslint-disable-line no-useless-escape
      meta[key] = {
        hid: key,
        property: key,
        content: tags[key]
      }
    } else if (!fakeTagNames.includes(key)) {
      meta[key] = {
        hid: key,
        name: key,
        content: tags[key]
      }
    }
  }

  return Object.values(meta)
}

// Smooth scroll animation to an element by ID
export function smoothScrollToElement(el, duration) {
  duration = typeof duration !== 'undefined' ? duration : 500
  el = typeof el === 'string' ? document.querySelector(el) : el

  if (el) {
    smoothScrollTo(el.offsetLeft, el.offsetTop, duration)
  }
}
