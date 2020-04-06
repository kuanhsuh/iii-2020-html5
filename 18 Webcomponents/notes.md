no framework overhead

https://github.com/mdn/web-components-examples

https://the-allstars.com/blog/website-information/what-is-web-components-why-is-it-so-important.html

custom elements
custom html tags
`<app-drawer></app-drawer>`
custom class
`class AppDrawer extends HTMLElement window.customElements.define('app-drawer')`
life cycle

shadow dom
deals with style
scope styles

html templates
slots`

Todos

1. Class UserCard extends HTMLelement

2. window customelements define name, class

- innerhtml in constructor

3. this.getAttribute('name')
   <user-card name="John Doe"></user-card>

## Shadow DOM

4. Global Style in index.html

- add another h3 in html

5. this.attachShadow({mode: 'open'})
6. this.shadowRoot.appendChild(template)

## Finish Template

7. add button, email, phone

8. Add template css

9. Add slot, one slot vs two slot(slot-name)

## Add Events

10. Connected Callback

11) disconnectedCallback

- if removed outof dom

12. add this.showInfo in constructor

13. toggleInfo Function
