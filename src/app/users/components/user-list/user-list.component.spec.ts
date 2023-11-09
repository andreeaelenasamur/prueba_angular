import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserDataService } from '../../services/user-data.service';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let mockSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserDataService
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      declarations: [UserListComponent]
    });
    mockSpy = spyOn(UserDataService.prototype, 'getUserList').and.returnValue(of());
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init form', () => {
    expect(component.form).not.toBeNull();
    expect(component.form).not.toBeUndefined();
    expect(component.form.value).toEqual({
      name: '',
      email: '',
      surnames: ''
    });
  });

  it('should call to getUserList when calls searchData', () => {
    expect(mockSpy).toHaveBeenCalledOnceWith(
      1,
      5,
      undefined
    );
  });

  it('nextPage method increments currentPage', () => {
    component.nextPage();

    expect(component.currentPage).toBe(2);
  });

  it('nextPage method increments currentPage', () => {
    component.currentPage = 2;
    component.previousPage();

    expect(component.currentPage).toBe(1);
  });
});
