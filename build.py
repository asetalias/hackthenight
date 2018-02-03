from staticjinja import make_site
import time

if __name__ == "__main__":
    context_home = {
        "navbar_class": "navbar-home"
    }
    contexts = [
        ('index.html', context_home),
    ]
    while(1):
        site = make_site(contexts = contexts)
        site.render()
        time.sleep(5)
