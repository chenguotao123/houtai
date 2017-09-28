var SystemMenu = [
{
	title: '系统首页',
	icon: '&#xe6cd;',
	isCurrent: true,
	menu: [{
		title: '系统首页',
		icon: '&#xe6cd;',
		isCurrent: true,
		children: [{
			title: '首页',
			icon: '&#xe6cd;',
			href: 'main_static/index/index.html',
			isCurrent: true
		}]
	}]
},
{
	title: '客户管理',
	icon: '&#xe615;',
	menu: [{
		title: '客户管理',
		icon: '&#xe615;',
		isCurrent: true,
		children: [{
			title: '客户列表',
			href: 'main_static/customer_list_manage/customer_list.html',
			isCurrent: true
		},{
			title: '转移客户',
			href: 'main_static/customer_transfer_manage/customer_transfer.html'
		},{
			title: '合并客户',
			href: 'main_static/customer_merge_manage/customer_merge.html'
		}]
	},{
		title: '回访列表',
		icon: '&#xe708;',
		href: 'main_static/customer_visit_manage/customer_visit.html',
		children: []
	},{
		title: '待办列表',
		icon: '&#xe65f;',
		href: 'main_static/customer_daiban_manage/customer_daiban.html',
		children: []
	},{
		title: '提醒列表',
		icon: '&#xe646;',
		href: 'main_static/customer_remind_manage/customer_remind.html',
		children: []
	}]
},
{
	title: '订单管理',
	icon: '&#xe60a;',
	menu: [{
		title: '订单列表',
		icon: '&#xe60a;',
		href: 'main_static/order_list_manage/order_list.html',
		isCurrent: true,
		children: [{
			title: '订单列表',
			href: 'main_static/order_list_manage/order_list.html',
			isCurrent: true
		}]
	},{
		title: '异常订单',
		icon: '&#xe604;',
		href: 'main_static/order_abnormal_manage/order_abnormal.html',
		children: []
	},{
		title: '订单报表',
		icon: '&#xe67c;',
		children: [{
			title: '日报表',
			href: 'main_static/order_day_report_manage/order_day_report.html',
			children: []
		},{
			title: '周报表',
			href: 'main_static/order_week_report_manage/order_week_report.html',
			children: []
		},{
			title: '月报表',
			href: 'main_static/order_month_report_manage/order_month_report.html',
			children: []
		},{
			title: '年报表',
			href: 'main_static/order_year_report_manage/order_year_report.html',
			children: []
		}]
	}]
},
{
	title: '商品管理',
	icon: '&#xe634;',
	menu: [{
		title: '商品管理',
		icon: '&#xe634;',
		isCurrent: true,
		children: [{
			title: '商品管理',
			href: 'main_static/product_manage/product.html',
			isCurrent: true
		}]
	},{
		title: '商品报表',
		icon: '&#xe614;',
		href: 'main_static/product_manage/product.html',
		children: [{
			title: '日报表',
			href: 'main_static/product_day_report_manage/product_day_report.html',
			children: []
		},{
			title: '周报表',
			href: 'main_static/product_week_report_manage/product_week_report.html',
			children: []
		},{
			title: '月报表',
			href: 'main_static/product_month_report_manage/product_month_report.html',
			children: []
		},{
			title: '年报表',
			href: 'main_static/product_year_report_manage/product_year_report.html',
			children: []
		}]
	},{
		title: '总报表',
		icon: '&#xe6e9;',
		href: 'main_static/product_all_report_manage/product_all_report.html',
		children: []
	}]
},
{
	title: '微信用户',
	icon: '&#xe66b;',
	menu: [{
		title: '微信顾客',
		icon: '&#xe66b;',
		isCurrent: true,
		children: [{
			title: '微信顾客',
			href: 'main_static/wechat_customer_manage/wechat_customer.html',
			isCurrent: true
		}]
	},{
		title: '微信店员',
		icon: '&#xe60b;',
		href: 'main_static/wechat_clerk_manage/wechat_clerk.html',
		children: []
	},{
		title: '微信业务员',
		icon: '&#xe61a;',
		href: 'main_static/wechat_salesman_manage/wechat_salesman.html',
		children: []
	}]
},
{
	title: '店员管理',
	icon: '&#xe682;',
	menu: [{
		title: '店员列表',
		icon: '&#xe682;',
		isCurrent: true,
		children: [{
			title: '店员管理',
			href: 'main_static/clerk_manage/clerk.html',
			isCurrent: true
		}]
	},{
		title: '签到列表',
		icon: '&#xe60f;',
		children: [{
			title: '签到管理',
			href: 'main_static/clerk_sign_manage/clerk_sign.html',
		}]
	},{
		title: '店员排行',
		icon: '&#xe67c;',
		children: [{
			title: '日排行',
			href: 'main_static/clerk_day_ranking_manage/day_ranking.html',
		},{
			title: '周排行',
			href: 'main_static/clerk_week_ranking_manage/week_ranking.html',
		},{
			title: '月排行',
			href: 'main_static/clerk_month_ranking_manage/month_ranking.html',
		},{
			title: '年排行',
			href: 'main_static/clerk_year_ranking_manage/year_ranking.html',
		}]
	},{
		title: '单品报表',
		icon: '&#xe602;',
		children: [{
			title: '单品日报表',
			href: 'main_static/clerk_day_report_manage/day_report.html',
		},{
			title: '单品周报表',
			href: 'main_static/clerk_week_report_manage/week_report.html',
		},{
			title: '单品月报表',
			href: 'main_static/clerk_month_report_manage/month_report.html',
		},{
			title: '单品年报表',
			href: 'main_static/clerk_year_report_manage/year_report.html',
		}]
	}]
},
{
	title: '客服管理',
	icon: '&#xe635;',
	menu: [{
		title: '客服管理',
		icon: '&#xe635;',
		isCurrent: true,
		children: [{
			title: '客服管理',
			href: 'main_static/customer_service_manage/customer_service.html',
			isCurrent: true
		}]
	},{
		title: '客服报表',
		icon: '&#xe6c3;',
		children: [{
			title: '日报表',
			href: 'main_static/customer_service_day_report/customer_service_day_report.html'
		},{
			title: '周报表',
			href: 'main_static/customer_service_week_report/customer_service_week_report.html'
		},{
			title: '月报表',
			href: 'main_static/customer_service_month_report/customer_service_month_report.html'
		},{
			title: '年报表',
			href: 'main_static/customer_service_year_report/customer_service_year_report.html'
		}]
	}]
},
{
	title: '门店管理',
	icon: '&#xe667;',
	menu: [{
		title: '门店管理',
		icon: '&#xe667;',
		isCurrent: true,
		children: [{
			title: '门店管理',
			href: 'main_static/mendian_manage/mendian.html',
			isCurrent: true
		}]
	},{
		title: '门店报表',
		icon: '&#xe613;',
		children: [{
			title: '日报表',
			href: 'main_static/mendian_day_report_manage/mendian_day_report.html'
		},{
			title: '周报表',
			href: 'main_static/mendian_week_report_manage/mendian_week_report.html'
		},{
			title: '月报表',
			href: 'main_static/mendian_month_report_manage/mendian_month_report.html'
		},{
			title: '年报表',
			href: 'main_static/mendian_year_report_manage/mendian_year_report.html'
		}]
	},{
		title: '单品报表',
		icon: '&#xe6ad;',
		children: [{
			title: '单品日报表',
			href: 'main_static/mendian_single_day_report/mendian_single_day_report.html'
		},{
			title: '单品周报表',
			href: 'main_static/mendian_single_week_report/mendian_single_week_report.html'
		},{
			title: '单品月报表',
			href: 'main_static/mendian_single_month_report/mendian_single_month_report.html'
		},{
			title: '单品年报表',
			href: 'main_static/mendian_single_year_report/mendian_single_year_report.html'
		}]
	}]
}
,{
	title: '系统管理',
	icon: '&#xe629;',
	menu: [{
			title: '系统管理',
			icon: '&#xe629;',
			isCurrent: true,
			children: [{
				title: '角色管理',
				href: 'main_static/system_role_manage/system_role.html',
				isCurrent: true
			},{
				title: '用户管理',
				href: 'main_static/system_user_manage/system_user.html',
				children: []
			},{
				title: '店员等级管理',
				href: 'main_static/system_clerk_grade_manage/system_clerk_grade.html',
				children: []
			},{
				title: '回访方式管理',
				href: 'main_static/system_visit_manage/system_visit.html',
				children: []
			},{
				title: '阶段名称管理',
				href: 'main_static/system_stage_name_manage/system_stage_name.html',
				children: []
			},{
				title: '客户等级管理',
				href: 'main_static/system_customer_grade_manage/system_customer_grade.html',
				children: []
			},{
				title: '体质管理',
				href: 'main_static/system_body_manage/system_body.html',
				children: []
			},{
				title: '门店管理',
				href: 'main_static/system_store_manage/system_store.html',
				children: []
			},{
				title: '项目管理',
				href: 'main_static/system_project_manage/system_project.html',
				children: []
			},{
				title: '科组病种（分类）管理',
				href: 'main_static/system_disease_category_manage/system_disease_category.html',
				children: []
			},{
				title: '业务员管理',
				href: 'main_static/system_salesman_manage/system_salesman.html',
				children: []
			}]
		}]
}
];