import React,{useContext, useEffect, Fragment} from 'react';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import {Link} from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";
import {Dropdown} from "react-bootstrap";
import { ThemeContext } from "../../../../context/ThemeContext";
import {letestBlog, recentEvent} from './../../Karciz/Dashboard/HomePageData';
import DropdownBlog from './../../Karciz/Dropdown/DropdownBlog';
import { useTranslation } from 'react-i18next';

const SalesChart = loadable(() =>
	pMinDelay(import("./../../Karciz/Dashboard/SalesChart"), 1000)
);
const IncreaseChart = loadable(() =>
	pMinDelay(import("./../../Karciz/Dashboard/IncreaseChart"), 1000)
);
const IncomeChart = loadable(() =>
	pMinDelay(import("./../../Karciz/Dashboard/IncomeChart"), 1000)
);
const Doughnutchart = loadable(() =>
	pMinDelay(import("./../../Karciz/Dashboard/Doughnutchart"), 1000)
);
const SellingApexChart = loadable(() =>
	pMinDelay(import("./../../Karciz/EventPage/SellingApexChart"), 1000)
);
const HomeSalesRevenueChart = loadable(() =>
	pMinDelay(import("./../../Karciz/Dashboard/HomeSalesRevenueChart"), 1000)
);

function DashboardLight(props) {
	  const { t, i18n } = useTranslation("dashboard");
    const { changeBackground,
        changeSideBarLayout,
       // changeContainerPosition,
        //changePrimaryColor,
        //chnageSidebarColor,
        //chnageHaderColor,
        //changeNavigationHader
     } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
		//changeSideBarLayout({ value: "horizontal", label: "Horizontal" });
		//changeContainerPosition({ value: "wide", label: "Wide" });
		//chnageSidebarColor("color_6");
		//changePrimaryColor("color_7");
		//chnageHaderColor("color_1");
		//changeNavigationHader("color_1");
	}, []);
	useEffect(() => {
		const language = localStorage.getItem("language");
		if (language) {
			i18n.changeLanguage(language);
		}
	},[])
	return(
		<Fragment>
			<div className="row">
				<div className="col-xl-6 col-xxl-5 col-lg-6">
					<div className="card ticket-bx">
						<div className="card-body">
							<div className="d-sm-flex d-block pb-sm-3 align-items-end">
								<div className="me-auto pr-3 mb-2 mb-sm-0">
									<span className="text-white fs-20 font-w200 d-block mb-sm-3 mb-2">{t("welcome")}</span>
									<h2 className="fs-40 text-white mb-0">{t("admin")}</h2>
								</div>
								{/* <div className="d-flex flex-wrap">
									<svg width="87" height="58" viewBox="0 0 87 58" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M18.4571 37.6458C11.9375 44.6715 4.81049 52.3964 2 55.7162H68.8125C77.6491 55.7162 84.8125 48.5528 84.8125 39.7162V2L61.531 31.9333C56.8486 37.9536 48.5677 39.832 41.746 36.4211L37.3481 34.2222C30.9901 31.0432 23.2924 32.4352 18.4571 37.6458Z" fill="url(#paint0_linear)"/>
										<path d="M2 55.7162C4.81049 52.3964 11.9375 44.6715 18.4571 37.6458C23.2924 32.4352 30.9901 31.0432 37.3481 34.2222L41.746 36.4211C48.5677 39.832 56.8486 37.9536 61.531 31.9333L84.8125 2" stroke="white"  strokeLinecap="round"/>
										<defs>
										<linearGradient id="paint0_linear" x1="43.4062" y1="8.71453" x2="46.7635" y2="55.7162" gradientUnits="userSpaceOnUse">
										<stop stopColor="white" offset="0"/>
										<stop offset="1" stopColor="white" stopOpacity="0"/>
										</linearGradient>
										</defs>
									</svg>
									<div className="ms-3">
										<p className="text-warning fs-20 mb-0">+4%</p>
										<span className="fs-12">than last day</span>
									</div>
								</div> */}
							</div>
							{/* <div className="progress mt-3 mb-4" style={{height:"15px"}}>
								<div className="progress-bar-striped progress-bar-animated" style={{width: "86%", height:"15px"}} role="progressbar">
									<span className="sr-only">86% Complete</span>
								</div>
							</div> */}
							<p className="fs-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima provident quia eaque numquam quisquam porro aut labore. Ratione minima corrupti impedit ipsam, asperiores praesentium tempore architecto harum necessitatibus minus.
							Atque tenetur quae asperiores maxime incidunt repellendus fugit numquam eum eligendi quo, in qui corrupti delectus aut facilis reprehenderit fuga nam reiciendis optio possimus soluta? Quam nulla architecto aliquid suscipit.</p>
							{/* <Link to={"#"} className="text-white">View detail<i className="las la-long-arrow-alt-right scale5 ms-3"></i></Link> */}
						</div>
					</div>
				</div>	
				<div className="col-xl-6 col-xxl-7 col-lg-6">
					<div className="row">
						<div className="col-sm-6">
							<div className="card overflow-hidden">
								<div className="card-header align-items-start pb-0 border-0">	
									<div>
										<h4 className="fs-16 mb-0">451,509</h4>
										<span className="fs-12">Sales</span>
									</div>
									<Dropdown className="">
										<Dropdown.Toggle  as="div" className="cursor-pointer fs-12">This Week</Dropdown.Toggle>	
										<Dropdown.Menu alignRight={true} className="dropdown-menu-right">
											<Dropdown.Item >Daily</Dropdown.Item>
											<Dropdown.Item >Weekly</Dropdown.Item>		
											<Dropdown.Item >Monthly</Dropdown.Item>		
										</Dropdown.Menu>	
									</Dropdown>
								</div>
								<div className="card-body p-0">
									<SalesChart className="me-3"/> 
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="card overflow-hidden">
								<div className="card-header align-items-start pb-0 border-0">	
									<div>
										<h4 className="fs-16 mb-0">Increase 25%</h4>
										<span className="fs-12">Comparisson</span>
									</div>
									<Dropdown className="">
										<Dropdown.Toggle variant="" as="div" className="cursor-pointer fs-12">Daily</Dropdown.Toggle>	
										<Dropdown.Menu alignRight={true} className="dropdown-menu-right">
											<Dropdown.Item >Daily</Dropdown.Item>
											<Dropdown.Item >Weekly</Dropdown.Item>		
											<Dropdown.Item >Monthly</Dropdown.Item>		
										</Dropdown.Menu>	
									</Dropdown>
								</div>
								<div className="card-body p-0">
									 <IncreaseChart /> 
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="card overflow-hidden">
								<div className="card-header align-items-start pb-0 border-0">	
									<Dropdown className="ms-auto">
										<Dropdown.Toggle variant="" as="div" className="cursor-pointer fs-12">This Week</Dropdown.Toggle>	
										<Dropdown.Menu alignRight={true} className="dropdown-menu-right">
											<Dropdown.Item >Daily</Dropdown.Item>
											<Dropdown.Item >Weekly</Dropdown.Item>		
											<Dropdown.Item >Monthly</Dropdown.Item>		
										</Dropdown.Menu>	
									</Dropdown>
								</div>
								<div className="card-body pt-2">
									<div className="index-chart-point">
										<div className="check-point-area overflow-hidden rounded me-2">	
											<Doughnutchart /> 
										</div>
										<ul className="index-chart-point-list">
											<li><i className="fa fa-stop text-danger"></i>Tickets A</li>
											<li><i className="fa fa-stop text-success"></i> Tickets B</li>
											<li><i className="fa fa-stop text-warning"></i> Tickets C</li>
											<li><i className="fa fa-stop text-info"></i> Tickets D</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="card overflow-hidden">
								<div className="card-header align-items-start pb-0 border-0">	
									<div>
										<h4 className="fs-16 mb-0">$456,623</h4>
										<span className="fs-12">Income</span>
									</div>
									<Dropdown className="ms-auto">
										<Dropdown.Toggle variant="" as="div" className="cursor-pointer fs-12">Monthly</Dropdown.Toggle>	
										<Dropdown.Menu alignRight={true} className="dropdown-menu-right">
											<Dropdown.Item >Daily</Dropdown.Item>
											<Dropdown.Item >Weekly</Dropdown.Item>		
											<Dropdown.Item >Monthly</Dropdown.Item>		
										</Dropdown.Menu>	
									</Dropdown>
								</div>
								<div className="card-body p-0">
									<IncomeChart /> 
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-9 col-xxl-8">	
					
					<div className="card" id="sales_revenue">
						<div className="card-header border-0 pb-0 d-sm-flex d-block">
							<div>
								<h4 className="mb-0 fs-20">Sales Revenue</h4>
							</div>
							<div className="d-flex align-items-center mb-3 mb-sm-0">
								<div className="round weekly" id="dzOldSeries">
									<div>
										<input type="checkbox" id="checkbox1" name="radio" value="weekly" />
										<label for="checkbox1" className="checkmark"></label>
									</div>
									<div>
										<span className="fs-14">This Week</span>
										<h4 className="fs-5 font-w600 mb-0">1.982</h4>
									</div>
								</div>
								<div className="round " id="dzNewSeries">
									<div>
										<input type="checkbox" id="checkbox" name="radio" value="monthly" />
										<label for="checkbox" className="checkmark"></label>
									</div>
									<div>
										<span className="fs-14">This Week</span>
										<h4 className="fs-5 font-w600 mb-0">1.982</h4>
									</div>	
								</div>
							</div>
						</div>
						<div className="card-body custome-tooltip">
							
							<HomeSalesRevenueChart />
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-xxl-4 col-md-6">
					<div className="card">
						<div className="card-header border-0 pb-0">
							<h4 className="fs-20">Best Selling</h4>
							<Dropdown>
								<Dropdown.Toggle variant="" as="div" className="cursor-pointer fs-12">This Week</Dropdown.Toggle>	
								<Dropdown.Menu alignRight={true} className="dropdown-menu-right">
									<Dropdown.Item >Daily</Dropdown.Item>
									<Dropdown.Item >Weekly</Dropdown.Item>		
									<Dropdown.Item >Monthly</Dropdown.Item>		
								</Dropdown.Menu>	
							</Dropdown>
						</div>
						<div className="card-body">
							<div className="d-flex justify-content-between align-items-center selling p-3 rounded">	
								<span className="fs-14">Tuesday</span>
								<span className="fs-14">215,523 pcs</span>
							</div>
							
							<SellingApexChart /> 
						</div>
					</div>
				</div>
						
			
				
			</div>	
		</Fragment>
	)
}
export default DashboardLight;