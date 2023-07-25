import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of users', () => {
    const compiled = fixture.nativeElement;
    const userList = compiled.querySelector('ul');
    expect(userList).toBeTruthy();

    const users = component.users;
    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBe(users.length);

    for (let i = 0; i < users.length; i++) {
      expect(listItems[i].textContent).toContain(users[i].name);
      expect(listItems[i].textContent).toContain(users[i].age);
    }
  });
});
