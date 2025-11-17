import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Metrics from "../models/metrics";

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

    constructor(private http: HttpClient) { }

    getMetrics$(): Observable<Metrics> {
        return this.http.get<Metrics>("https://api.v2.infosas.es/v1/metrics");
    }
}
