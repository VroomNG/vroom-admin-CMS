import { Component , OnInit} from '@angular/core';
// import { MockdataService } from 'src/app/data/mockdata.service';
import { dashboardInfo } from 'src/app/model/dashboardInfo';
import { IChart_data } from 'src/app/model/dashboardInfo';
import { ChartService } from 'src/app/service/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  options: any;
  chart: IChart_data[] = [];

  constructor(
    private Chart: ChartService
    ) { }
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Registered Users for this year',
                backgroundColor: documentStyle.getPropertyValue('--blue-900'),
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: [65, 59, 80, 81, 56, 55, 40]
            },
          
        ]
    };

    this.Chart.getChartData().subscribe(
        (res:any)=>{
            console.log(res)
            this.chart = res.data
        }
    )

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }

        }
    };
}

  // dashboard_data = this.mockDataService.dashboard_data
  IDashboard = dashboardInfo;
  dashboard: dashboardInfo [] = [
    {
      id:1,
      title: 'RIDERS',
      Number:654, 
      isThismonth: false,
   },
    {
      id:2,
      title: 'DRIVERS',
      Number:156, 
      isThismonth: false,
   },
    {
      id:3,
      title: 'VEHICLES',
      Number:3, 
      isThismonth: false,
   },
    {
      id:4,
      title: 'COMPLETED TRIPS',
      Number:0, 
      isThismonth: false,
   },
    {
      id:5,
      title: 'TOTAL TRIPS',
      Number:0, 
      isThismonth: false,
   },
    {
      id:6,
      title: 'TOTAL TRIP PAYMENT',
      Number: 17518000, 
      isThismonth: false,
   },
    {
      id:7,
      title: 'TOTAL TRIP COMMISION',
      Number: 453200, 
      isThismonth: false,
   },
    {
      id:8,
      title: 'TOTAL DRIVER EARNED',
      Number: 96074300, 
      isThismonth: false,
   },
  

  ]
}
