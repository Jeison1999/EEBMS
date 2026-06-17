import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar implements OnInit, OnDestroy {
  public readonly scrolled = signal(false);
  public readonly menuOpen = signal(false);

  private onScroll = () => {
    this.scrolled.set(window.scrollY > 0);
  };

  private onResize = () => {
    if (window.matchMedia('(min-width: 901px)').matches) {
      this.menuOpen.set(false);
    }
  };

  ngOnInit(): void {
    this.scrolled.set(window.scrollY > 0);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
