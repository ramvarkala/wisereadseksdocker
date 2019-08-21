import { TestBed } from '@angular/core/testing';

import { AssignRoleService } from './assign-role.service';

describe('AssignRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignRoleService = TestBed.get(AssignRoleService);
    expect(service).toBeTruthy();
  });
});
