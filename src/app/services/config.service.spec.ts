import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService]
    });
    service = TestBed.inject(ConfigService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products from fake API', () => {
    const mockProducts = [{ id: 1, title: 'Product 1' }];
    service.loadProductsFromFakeApi().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });
});
