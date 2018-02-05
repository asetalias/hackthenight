from staticjinja import make_site

if __name__ == "__main__":
    context_home = {
        "navbar_class": "navbar-home"
    }
    contexts = [
        ('index.html', context_home),
    ]
    site = make_site(contexts = contexts)
    site.render(use_reloader=True)
