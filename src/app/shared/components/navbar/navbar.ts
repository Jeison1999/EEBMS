import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar implements OnInit, OnDestroy {
  public readonly scrolled = signal(false);

  private onScroll = () => {
    // considerar scrolled true con cualquier desplazamiento > 0
    this.scrolled.set(window.scrollY > 0);
  };

  ngOnInit(): void {
    // inicializa con el valor actual por si la página no empieza en top
    this.scrolled.set(window.scrollY > 0);
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }
}
