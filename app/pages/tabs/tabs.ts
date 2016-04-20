import {Page, IonicApp} from 'ionic-angular';
import {AccountPage} from '../account/account.component.ts'
import {DashboardPage} from '../dashboard/dashboard.component.ts'
import {AnalyticsPage} from '../analytics/analytics.component.ts'

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
	constructor(private app: IonicApp) {
		this.AccountPage = AccountPage
		this.DashboardPage = DashboardPage
		this.AnalyticsPage = AnalyticsPage
	}
}
