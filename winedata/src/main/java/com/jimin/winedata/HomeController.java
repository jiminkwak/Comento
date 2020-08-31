package com.jimin.winedata;

import java.util.List;
import java.util.Locale;
 
import javax.inject.Inject;
 
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.jimin.vo.AvgVO;
import com.jimin.vo.FixedVolVO;
import com.jimin.vo.FreeTotalVO;
import com.jimin.vo.QualityVO;
import com.jimin.vo.WineVO;
import com.jimin.service.WineService;
 
/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
    
    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
    
    @Inject
    private WineService service;
    
    /**
     * Simply selects the home view to render by returning its name.
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(Locale locale, Model model) throws Exception{
 
        logger.info("home");
        
        List<WineVO> wineList = service.selectWine();
        List<AvgVO> avgList = service.selectAvg();
        List<QualityVO> qualityList = service.selectQuality();
        List<FreeTotalVO> freetotalList = service.selectFreeTotal();
        List<FixedVolVO> fixedvolList = service.selectFixedVol();
        
        model.addAttribute("wineList", wineList);
        model.addAttribute("avgList", avgList);
        model.addAttribute("qualityList", qualityList);
        model.addAttribute("freetotalList", freetotalList);
        model.addAttribute("fixedvolList", fixedvolList);
        return "home";
    }
    
}