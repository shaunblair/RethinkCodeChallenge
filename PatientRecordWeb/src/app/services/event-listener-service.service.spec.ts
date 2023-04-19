import { TestBed } from '@angular/core/testing';

import { EventListenerServiceService } from './event-listener-service.service';

describe('EventListenerServiceService', () => {
  let service: EventListenerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventListenerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
