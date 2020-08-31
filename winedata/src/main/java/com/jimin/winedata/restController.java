package com.jimin.winedata;

import java.util.List;


import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jimin.service.WineService;
import com.jimin.vo.AvgVO;
import com.jimin.vo.FixedVolVO;
import com.jimin.vo.FreeTotalVO;
import com.jimin.vo.QualityVO;
import com.jimin.vo.WineVO;

@RestController
public class restController {
	private static final Logger logger = LoggerFactory.getLogger(restController.class);
    
    @Inject
    private WineService service;
    
    /**
     * Simply selects the home view to render by returning its name.
     */
    @RequestMapping(value = "/wineList")
    public List<WineVO> wineList() throws Exception{
 
        logger.info("home");
        
        List<WineVO> wineList = service.selectWine();
        
        //model.addAttribute("movieList", movieList);
 
        return wineList;
    }
    
    
    @RequestMapping(value = "/qualityList")
    public List<QualityVO> qualityList() throws Exception{
 
        logger.info("home");
        
        List<QualityVO> qualityList = service.selectQuality();
        
        //model.addAttribute("movieList", movieList);
 
        return qualityList;
    }
    
    
    @RequestMapping(value = "/avgList")
    public List<AvgVO> avgList() throws Exception{
    	 
        logger.info("home");
        
        List<AvgVO> avgList = service.selectAvg();
        
        //model.addAttribute("movieList", movieList);
 
        return avgList;
    }
    
    
    @RequestMapping(value = "/freetotalList")
    public List<FreeTotalVO> freetotalList() throws Exception{
    	 
        logger.info("home");
        
        List<FreeTotalVO> freetotalList = service.selectFreeTotal();
        
        //model.addAttribute("movieList", movieList);
 
        return freetotalList;
    }
    
    @RequestMapping(value = "/fixedvollList")
    public List<FixedVolVO> fixedvolList() throws Exception{
    	 
        logger.info("home");
        
        List<FixedVolVO> fixedvolList = service.selectFixedVol();
        
        //model.addAttribute("movieList", movieList);
 
        return fixedvolList;
    }
    
}
