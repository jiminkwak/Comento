package com.jimin.service;

import java.util.List;



import javax.inject.Inject;
 
import org.springframework.stereotype.Service;
 
import com.jimin.dao.WineDAO;
import com.jimin.vo.AvgVO;
import com.jimin.vo.FixedVolVO;
import com.jimin.vo.FreeTotalVO;
import com.jimin.vo.QualityVO;
import com.jimin.vo.WineVO;
 
@Service
public class WineServiceImpl implements WineService {
 
    @Inject
    private WineDAO dao;
    
    @Override
    public List<WineVO> selectWine() throws Exception {
 
        return dao.selectWine();
    }
    
    @Override
    public List<QualityVO> selectQuality() throws Exception {
 
        return dao.selectQuality();
    }
    
    @Override
    public List<AvgVO> selectAvg() throws Exception {
 
        return dao.selectAvg();
    }
    
    @Override
    public List<FreeTotalVO> selectFreeTotal() throws Exception {
 
        return dao.selectFreeTotal();
    }
    
    @Override
    public List<FixedVolVO> selectFixedVol() throws Exception {
 
        return dao.selectFixedVol();
    }
 
}
