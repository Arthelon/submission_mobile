import {Page, IonicApp, MenuController} from 'ionic-angular';
import {AccountPage} from '../account/account.component.ts'
import {DashboardPage} from '../dashboard/dashboard.component.ts'
import {AnalyticsPage} from '../analytics/analytics.component.ts'

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
	AccountPage = AccountPage
	DashboardPage = DashboardPage
	AnalyticsPage = AnalyticsPage
	
	constructor(private app: IonicApp) {
	}
}
