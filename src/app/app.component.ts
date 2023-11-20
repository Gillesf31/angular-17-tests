import {Component, inject} from '@angular/core';
import {UserService} from "./users/service/user.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ph-team-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly userService = inject(UserService);
  public users = toSignal(this.userService.getUsersWithCalories());
}
